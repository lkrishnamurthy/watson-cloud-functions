# Conversation Cloud Functions Integration Demo

A simple chat bot that demonstrates usage of IBM Cloud Functions within Watson Assistant.
The Cloud function action is configured to help get the right location information
given a city or state or both.

## Pre-requistes
- Watson Assistant instance created in IBM Cloud
- IBM Cloud Functions instance created in IBM Cloud. For more information on how to setup a Cloud functions instance refer to [IBM Cloud Functions](https://console.bluemix.net/openwhisk/)
- Optionally, install IBM Cloud CLI for Cloud Functions if you are going to use command line.

## Install Steps.

- Import the conversation workspace using the conversation-ws-cloud-function.json provided into Watson Assistant
- Create a new action using your cloud function instance and copy and paste the contents from weather.js
- Define two input parameters for key and location in cloud functions.
- Copy and paste the user id and password for your action from the cloud functions 'endpoint' link
- You should be all set to test it

## Running the demo.

- Get an API Key from weather.api APIs or use [IBM Cloud weather insights Api](https://console.bluemix.net/docs/services/Weather/weather_rest_apis.html#rest_apis)
- Copy & Paste the Weather API key into the cloud function action.
- Use the "Location" entity check node in the dialog tab and paste the userid and password within the context parameters for the response.
- Wait till the training is complete
- Use the "Try it" option inside Watson Assistant to now test your scenario
- Enter a city name (such as Boston) or city name and state (Albany NY)
- You wil get a response from the Weather location API now with a corresponding city, state and country name.
- Using this you can invoke other Weather APIs such as the daily forecast or weekly forecast.

## References.
- [Progammatic functions within Dialog](https://console.bluemix.net/docs/services/conversation/dialog-actions.html#dialog-actions)
- [DeveloperWorkds Recipe - Watson Conversation & IBM Cloud Functions together](https://developer.ibm.com/recipes/tutorials/watson-conversation-ibm-cloud-functions-to-do-a-longtail-chatbot/)
