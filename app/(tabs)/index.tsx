import { Image, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="absolute bottom-0 h-44 w-72"
        />
      }>
      <View className="flex-row items-center gap-2">
        <Text className="text-4xl font-bold text-white">Welcome!</Text>
        <HelloWave />
      </View>
      <View className="gap-2 mb-2">
        <Text className="text-lg font-semibold">Step 1: Try it</Text>
        <Text>
          Edit <Text className="font-semibold">app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text className="font-semibold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View className="gap-2 mb-2">
        <Text className="text-lg font-semibold">Step 2: Explore</Text>
        <Text>Tap the Explore tab to learn more about what's included in this starter app.</Text>
      </View>
      <View className="gap-2 mb-2">
        <Text className="text-lg font-semibold">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run <Text className="font-semibold">npm run reset-project</Text> to get a fresh{' '}
          <Text className="font-semibold">app</Text> directory. This will move the current{' '}
          <Text className="font-semibold">app</Text> to <Text className="font-semibold">app-example</Text>.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
