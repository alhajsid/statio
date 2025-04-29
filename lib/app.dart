import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'components/sidebar.dart';
import 'providers/app_provider.dart';
import 'screens/campaigns_screen.dart';
import 'screens/creatives_screen.dart';
import 'screens/dashboard_screen.dart';
import 'screens/settings_screen.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => AppProvider(),
      child: MaterialApp(
        title: 'Statio',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        initialRoute: '/dashboard',
        routes: {
          '/dashboard': (context) => const DashboardScreen(),
          '/creatives': (context) => const CreativesScreen(),
          '/campaigns': (context) => const CampaignsScreen(),
          '/settings': (context) => const SettingsScreen(),
        },
      ),
    );
  }
}