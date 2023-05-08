from django.urls import path
import views

urlpatterns = [
    path('shoulder1/', views.shoulder_estimation1, name='shoulder_estimation1'),
    path('shoulder2/', views.shoulder_estimation2, name='shoulder_estimation2'),
    path('knee/', views.knee_estimation, name='knee_estimation'),
    path('elbow1/', views.left_elbow_flexicon, name='left_elbow_flexicon'),
    path('elbow2/', views.right_elbow_flexicon, name='right_elbow_flexicon')
]
