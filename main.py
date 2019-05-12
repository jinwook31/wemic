import os
import sys
import requests
import vector as ve
import json

client_id = "g938s1gdjc"
client_secret = "CVyd24UEQEmnQLC4x3CQGBxkjuvwHDj7Onzc3VPU"
url = "https://naveropenapi.apigw.ntruss.com/vision-pose/v1/estimate" # 사람 인식

def getAccur(pic,boothID):
    headers = {'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
    response = requests.post(url,  files=pic, headers=headers)
    rescode = response.status_code

    if(rescode==200):
        return ve.getVect(response.json(),boothID)


    else:
        print("Error Code:" + rescode)
