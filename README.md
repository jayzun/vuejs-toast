#

## Installation

```bash
npm i vuejs-toasts --save
```

## Usage

```javascript
//main.js
import Toast from 'vuejs-toasts';

Vue.use(Toast);

//.vue files
/*show component*/
this.$toast.show({text: 'hello world'});
/*close component*/
this.$toast.close();
```

## Preview

```javascript
this.$toast.show({
    text: 'hello world!',
    type: 'info'
});
```

![vuejs-toasts](https://s2.ax1x.com/2019/01/03/FoM2qK.png)

## Option

use option to custom the component.
option is an object.
Use option in the following ways:

```javascript
this.$toast.show(option);
```

or

```javascript
Vue.use(Toast, option);
```

option available:

| key | type | default | description |
| :-: | :-: | :-: | ------ |
| text | string |  | toast text |
| type | string | "normal" | type of toast, can be "normal", "success", "fail" or "info" |
| mask | boolean | true | whether to show a fullscreen,transparent mask |
| callback | function |  | function to call when toast is closed |
| duration | number | 2000 | auto close time, 1000 = 1 second; |

## License

The MIT License