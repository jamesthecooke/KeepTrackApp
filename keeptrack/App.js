// import HomeScreen from "./screens/HomeScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// export default function App() {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import "react-native-url-polyfill/auto";
// import { useState, useEffect } from "react";
// import { supabase } from "./lib/superbase";
// import Auth from "./components/auth";
// import Account from "./components/account";
// import { View } from "react-native";
// import { Session } from "@supabase/supabase-js";

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   return (
//     <View>
//       {session && session.user ? (<Account key={session.user.id} session={session} />) : ( <Auth />
//       )}
//     </View>
//   );
// }

// Imports for React, React Native, and Supabase

import React, { useState, useEffect } from "react";
import { supabase } from "./lib/superbase";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";

// Imports for React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens/components
import HomeScreen from "./screens/HomeScreen";
import Auth from "./components/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup auth listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Function to render the correct navigator or screen based on the authentication state
  function renderApp() {
    // If session exists and has a user, render the NavigationContainer to HomeScreen
    if (session && session.user) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      // If no valid session/user, render the Auth component
      return <Auth />;
    }
  }

  return <View style={{ flex: 1 }}>{renderApp()}</View>;
}

// trying to push
