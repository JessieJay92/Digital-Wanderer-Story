{
  "name": "digital-wanderer-story",
  "version": "1.0.0",
  "description": "Interactive Claudia.js branching story API",
  "main": "index.js",
  "dependencies": {
    "claudia-api-builder": "^4.1.0"
  }
}
# Digital Wanderer Interactive Story API

## How To Use

1. **Clone or download this repo.**
2. **Install Claudia and dependencies:**3. 
**Deploy to AWS Lambda:**
4. **POST to /story endpoint with:**
Continue by sending `"passage"` as the key for each new node.

5. **To add more scenes or art:**  
Open `story.js`, add new passages/fields, and redeploy with `claudia update`.

## Tips

- Client can be web, chatbot, or API tester (Postman).
- Edit `story.js` to expand story.
