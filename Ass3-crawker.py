
from cmath import log
from turtle import tilt
import urllib.request as request
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
import json
import re

with request.urlopen(src)as response:
    data=json.load(response)
    posts=data["result"]["results"]
    titles="景點名稱,區域,經度,緯度,圖檔網址\n"

    
for post in posts:  # posts = all data // post = one by one data 
    newposts = {}
    date=post["xpostDate"][0:4]
    date=int(date)
    if date >=2015: 
        name=post["stitle"]
        date=post["xpostDate"]
        longitude=post["longitude"]
        latitude=post["latitude"]
        address=post["address"][5:8]
        file1=post["file"].lower() #[:post["file"].find("jpg")+3]
        if file1.find("jpg")+3 :
            file1=file1[:file1.find("jpg")+3]
            titles=titles+"{},{},{},{},{}\n".format(name,address,longitude,latitude,file1)
            # print(titles)

with open("data.csv","w",encoding="utf-8")as file:
        file.write(titles)











