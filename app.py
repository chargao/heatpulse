from flask import Flask, render_template,json
import markdown

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

# The original idea was to store the homepage text in template/homepage.md,
# then pre-render the markdown text into html, pass it into index.html as,
# a string, then render it in the template. Changed my mind because the map
# is embedded in the middle
# @app.route("/")
# def index():
#     homepage = open("templates/homepage.md", "r")
#     md_template_string = markdown.markdown(homepage.read())
#     return render_template('index.html',homepage_text=md_template_string)

@app.route("/team")
def team():
    return render_template('team.html')

@app.route("/about")
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run()