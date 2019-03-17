#POST 
import http.client, urllib.request, urllib.parse, urllib.error, base64, requests, json

subscription_key = "8a86b17a0c974e8c90a9f22de560d8fd"
assert subscription_key

key_phrase_api_url = "https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases"


documents = {'documents' : [ {'id': '1', 'text': 'Pet sitters are responsible for all basic animal care while their clients are on vacation or traveling for business. Routine duties for a pet sitter include feeding, putting out fresh water, brushing pets, taking dogs on walks, and cleaning litter boxes.'} ] }
headers   = {'Ocp-Apim-Subscription-Key': subscription_key, 'Content-Type' : 'application/json'}
response  = requests.post(key_phrase_api_url, headers=headers, json=documents)
key_phrases = response.json()

print(json.dumps(key_phrases["documents"][0]))
