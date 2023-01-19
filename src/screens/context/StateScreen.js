import {createContext ,useContext } from "react"
import { View } from "react-native";

const Context = createContext(null);

const State = ({children}) => {
    const [fullData, setFullData] = useState(data);
    return (
        <View>

<Context.Provider value={theme}>
{children}
</Context.Provider>



        </View>

    )
}