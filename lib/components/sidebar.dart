import 'package:flutter/material.dart';
import 'package:statio_flutter/providers/app_provider.dart';
import 'package:provider/provider.dart';

class Sidebar extends StatelessWidget {
  const Sidebar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appProvider = Provider.of<AppProvider>(context, listen: false);

    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: const BoxDecoration(
              color: Colors.blue,
            ),
            child: Row(
              children: [
                Image.asset(
                  'assets/logo.png', // Replace with your logo path
                  width: 40,
                  height: 40,
                ),
                const SizedBox(width: 10),
                const Text(
                  'Statio',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ],
            ),
          ),
          ListTile(
            leading: const Icon(Icons.home),
            title: const Text('Dashboard'),
            onTap: () {
              appProvider.navigateTo('/dashboard');
            },
          ),
          ListTile(
            leading: const Icon(Icons.image),
            title: const Text('Creatives'),
            onTap: () {
              appProvider.navigateTo('/creatives');
            },
          ),
          ListTile(
            leading: const Icon(Icons.video_library),
            title: const Text('Campaigns'),
            onTap: () {
              appProvider.navigateTo('/campaigns');
            },
          ),
          ListTile(
            leading: const Icon(Icons.settings),
            title: const Text('Settings'),
            onTap: () {
              appProvider.navigateTo('/settings');
            },
          ),
        ],
      ),
    );
  }
}