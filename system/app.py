from flask import Flask,render_template,request
import pickle
import numpy as np
import pandas as pd


merge3_df = pickle.load(open('merge3_df.pkl','rb'))
names_df = pickle.load(open('names_df.pkl','rb'))
merge_df = pickle.load(open('merge_df.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))
# similarity_scores = pickle.load(open('similarity_scores.pkl','rb'))





# from sklearn.feature_extraction.text import CountVectorizer
# cv = CountVectorizer(max_features=500,stop_words='english')

# vector = cv.fit_transform(merge3_df['fin_tags']).toarray()

# from sklearn.metrics.pairwise import cosine_similarity

# similarity = cosine_similarity(vector)

collab_merge_df=merge_df
popularity_merge_df=merge_df

def recommend(dish):
    recommended_products=[];
    if not merge3_df[merge3_df['recipe_name'] == dish].empty:
        index = merge3_df[merge3_df['recipe_name'] == dish].index[0]
        distances = sorted(list(enumerate(similarity[index])),reverse=True,key = lambda x: x[1])
        for i in distances[1:10001]:
            recommended_products.append(merge3_df.iloc[i[0]].recipe_id)
        return recommended_products
    
from fuzzywuzzy import fuzz, process

target_name = 'pizza'

similar_names = process.extract(target_name, names_df['recipe_name'], limit=3)

recommended_products=[]
for name in similar_names:
    if name[1]/name[2]>=0.1:
        recommended_products=recommended_products+recommend(name[0])

recommended_df = pd.DataFrame(recommended_products, columns=['recipe_id'])

recommended_df=recommended_df.drop_duplicates('recipe_id').reset_index()

recommended_df=recommended_df[['recipe_id']]
# print(recommended_df)

merge_df=merge_df[['name','recipe_id','user_id','rating']]

collab_df=recommended_df.merge(merge_df,on='recipe_id')

collab_merge_df=collab_df[['name','recipe_id','user_id','rating']]
collab_final_df=collab_merge_df

x=collab_merge_df.groupby('user_id').count()['rating'] > 10

users_with_more_ratings=x[x].index

filtered_rating = collab_merge_df[collab_merge_df['user_id'].isin(users_with_more_ratings)]

y = filtered_rating.groupby('name').count()['rating']>=20
famous_food = y[y].index

final_ratings = filtered_rating[filtered_rating['name'].isin(famous_food)]

pt = final_ratings.pivot_table(index='name',columns='user_id',values='rating')
pt.fillna(0,inplace=True)

from sklearn.metrics.pairwise import cosine_similarity

similarity_scores = cosine_similarity(pt)

def recommend_collab(dish_name):
    similar_name = process.extract(dish_name, final_ratings['name'], limit=1)
    index = np.where(pt.index==similar_name[0][0])[0][0]
    similar_items = sorted(list(enumerate(similarity_scores[index])),key=lambda x:x[1],reverse=True)[1:21]
    
    data = []
    for i in similar_items:
        data.append(pt.index[i[0]])
    return data

collab_similar_items=recommend_collab('dosa')

collab_final_df=collab_merge_df[collab_merge_df['name'].isin(collab_similar_items)]

content_final_df=collab_df[['name','recipe_id']]

content_final_df=content_final_df.drop_duplicates('recipe_id').reset_index()

content_final_df=content_final_df[['name','recipe_id']]

content_final_df=content_final_df.head(20)

collab_final_df=collab_final_df[['name','recipe_id']]

collab_final_df=collab_final_df.drop_duplicates('recipe_id').reset_index()

collab_final_df=collab_final_df[['name','recipe_id']]

collab_final_df=collab_final_df.head(20)

num_ratings_df=popularity_merge_df.groupby('recipe_id').count()['rating'].reset_index()

popularity_merge_df=collab_df

avg_rating_df=collab_df.groupby('recipe_id').mean()['rating'].reset_index()

num_ratings_df.rename(columns={'rating':'num_ratings'},inplace=True)

avg_rating_df.rename(columns={'rating':'avg_rating'},inplace=True)

popular_df=num_ratings_df.merge(avg_rating_df,on='recipe_id')

popular_df = popular_df[popular_df['num_ratings']>=20].sort_values('avg_rating',ascending=False)

popular_df = popular_df.merge(collab_df,on='recipe_id').drop_duplicates('recipe_id')[['recipe_id','name','num_ratings','avg_rating']].sort_values(by=["avg_rating", "num_ratings"], ascending=[False, False])

popularity_final_df=popular_df[['name','recipe_id']]

popularity_final_df=popularity_final_df.drop_duplicates('recipe_id').reset_index()

popularity_final_df=popularity_final_df[['name','recipe_id']]

popularity_final_df=popularity_final_df.head(20)

merged_final_df = pd.concat([content_final_df, collab_final_df], ignore_index=True)
merged_final_df = pd.concat([merged_final_df,popularity_final_df], ignore_index=True)

merged_final_df.drop_duplicates('recipe_id')

merged_final_df['weight']=0

def assign_weights():
    for idx,row in merged_final_df.iterrows():
        wght=0
        idx1 = content_final_df[content_final_df['recipe_id'] == row[1]].index[0] if any(content_final_df['recipe_id'] == row[1]) else 20
        idx2= collab_final_df[collab_final_df['recipe_id'] == row[1]].index[0] if any(collab_final_df['recipe_id'] == row[1]) else 20
        idx3 = popularity_final_df[popularity_final_df['recipe_id'] == row[1]].index[0] if any(popularity_final_df['recipe_id'] == row[1]) else 20
        wght=0.5*(20-idx1)+0.3*(20-idx2)+0.2*(20-idx3)
        row_idx=merged_final_df[merged_final_df['recipe_id'] == row[1]].index[0]
        merged_final_df.at[row_idx, 'weight'] = wght

assign_weights()

final_system = merged_final_df.sort_values(by='weight', ascending=False).reset_index()
final_system=final_system[['name','recipe_id']].head(20)

print(final_system)






app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello world"
# def index():
#     return render_template('index.html',
#                            book_name = list(popular_df['Book-Title'].values),
#                            author=list(popular_df['Book-Author'].values),
#                            image=list(popular_df['Image-URL-M'].values),
#                            votes=list(popular_df['num_ratings'].values),
#                            rating=list(popular_df['avg_rating'].values)
#                            )

# @app.route('/recommend')
# def recommend_ui():
#     return render_template('recommend.html')

# @app.route('/recommend_books',methods=['post'])
# def recommend():
#     user_input = request.form.get('user_input')
#     index = np.where(pt.index == user_input)[0][0]
#     similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

#     data = []
#     for i in similar_items:
#         item = []
#         temp_df = books[books['Book-Title'] == pt.index[i[0]]]
#         item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
#         item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
#         item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))

#         data.append(item)

#     print(data)

#     return render_template('recommend.html',data=data)

if __name__ == '__main__':
    app.run(debug=True)