# Parts 
1. **app** and instance of the Flask class from flask in python
2. **__name__** the python flask application
3. 
```python
if __name__ == "main":
    app.run(debug = TRUE)
```
run the program in debug mode

4.  **Constructor** -- defines a route for our application rendered at the `http://<app name>/parameter`

```python
app.route("/") # render at 'http://<app name>/'
```


