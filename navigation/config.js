import { createStackNavigator } from "react-navigation-stack"
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";


export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomWidth: 0
    },
    headerTitle: {
        color: TINT_COLOR
    },
    headerTintColor: TINT_COLOR
}

export const createStack = (screen, title) =>
    createStackNavigator({       //인자로 받은 screen,title을 가지고 createStackNavigator의 함수를 실행해 리턴값을 받는 함수
        Screen: {
            screen,
            navigationOptions: {
                title,
                ...headerStyles
            }
        }
    })
