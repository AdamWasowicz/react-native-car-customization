# What is this project
In short it is app for Android devices made using React Native, it uses face recognition to authenticate users.
For face recognition there is REST API made with Flask.
There is model with servos made with Rasberry Pi that imitates car's components, app was communicating with model using REST API.


## Links
- Face recognition API: https://github.com/jastka4/ICK
- Model REST API:       https://github.com/bartoszpiech/ick_model


## How to run it
For using face recognition with this app you will need to run face recognition API and then go to
./redux/features/app-slice.ts and change ```initialState``` object property ```apiAddress``` to face recognition API address.

### Using Android emulator
in main directory executte commands.
```
npm install
npm start
```
then press "a" key to start app on local android emulator.

## Compile for android
in main directory executte commands, you will need Expo account for compilation.
```
npm install
eas build -p android --profile preview
```