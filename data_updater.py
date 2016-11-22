#!/usr/bin/env python
# -*-  -*-

import requests
import json

members_file = open('members.json', 'r')
members_data = json.loads(members_file.read())

graph_url = "http://graph.facebook.com/"
data = {}
for member in members_data:
    img_url = requests.get(
            graph_url +
            str(member['fbid']) + '/picture?type=large&redirect=false'
        ).json()['data']['url']
    # print member['fbid']
    # print img_url
    data[member["fbid"]] = [member["name"], img_url]

data_file = open("data.json", "w")
data_file.write(json.dumps(data))
