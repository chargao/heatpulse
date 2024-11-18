from flask import Flask, render_template,json
import markdown

app = Flask(__name__)

@app.route("/")
def index():
    homepage = open("templates/homepage.md", "r")
    md_template_string = markdown.markdown(homepage.read())
    return render_template('index.html',homepage_text=md_template_string)

if __name__ == "__main__":
    app.run()