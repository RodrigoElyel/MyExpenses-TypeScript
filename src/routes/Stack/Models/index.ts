import { StackNavigationProp } from "@react-navigation/stack"

import { RouteProp } from "@react-navigation/native"


export type propsNavigationStack = {
    Home: undefined,
    Details: {
        name: string,
        language: string,
        // [key: string]: any
    }
}


export type propsStack = StackNavigationProp<propsNavigationStack>
export type DetailsRouteProp = RouteProp<propsNavigationStack, 'Details'>;
