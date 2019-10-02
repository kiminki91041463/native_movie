import React from "react"
import { Text, TouchableOpacity } from "react-native"

export default ({ navigation }) => (<>
    <Text>Movie List</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to detail</Text>
    </TouchableOpacity>
</>);