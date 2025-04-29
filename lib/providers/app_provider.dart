import 'package:flutter/material.dart';
import 'package:statio_flutter/services/meta_ads_service.dart';

class AppProvider with ChangeNotifier {
  Map<String, dynamic> _analytics = {};
  Map<String, dynamic> get analytics => _analytics;

  Future<void> getMetaAnalytics() async {
    final service = MetaAdsService();
    _analytics = await service.getAnalytics();
    notifyListeners();
  }
}