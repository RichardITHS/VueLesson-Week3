# VueLesson-Week3
Week 3 lesson at ITHS

Topic:

- VUE Events including v-on
- Methods
- Form Management with v-model
- Calculated properties, Computed
- Watchers
- Rest API, Fetching with Get, Post, Delete

Explanation about Methods, Computed and Watcher

Methods:
- Use with event binding OR data binding
- When data binding >> Method is executed for every re-render cycle of the component
- Use it for data or events that needs to be re-evalutaded all the time (if have a counter that adds a number in the app and also a input
field in the same app, everything will be re-rendered if one of them is changed)

Computed:
- Use with data binding
- Only re-evaluated if one of their "used values" is changed (nothing else in the app will we affected and therefore the performance
will be better (sometimes we want the opposite))

Watchers:
- Not used directly in the HTML template
- Allows you to run any code if some data is changed, example is: http requests or input fields that is changed
- Use for any non-data update you want to make
- You use a name in the data() section to work with

