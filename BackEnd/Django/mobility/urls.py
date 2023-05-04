from django.urls import path
import views

urlpatterns = [
    path('shoulder1/', views.shoulder_estimation1, name='shoulder_estimation1'),
    path('shoulder2/', views.shoulder_estimation2, name='shoulder_estimation2'),
    path('knee/', views.knee_estimation, name='knee_estimation'),
    path('elbow/', views.elbow_estimation, name='elbow_estimation')
]
