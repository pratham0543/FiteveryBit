from django.urls import path
import views

urlpatterns = [
    path('shoulder1/', views.shoulder_estimation1, name='shoulder_estimation1'),
    path('shoulder2/', views.shoulder_estimation2, name='shoulder_estimation2'),
    path('knee/', views.active_knee_extension, name='active_knee_extension'),
    path('leftelbow1/', views.left_elbow_flexicon, name='left_elbow_flexicon'),
    path('rightelbow1/', views.right_elbow_flexicon, name='right_elbow_flexicon'),
    path('elbow2/', views.shoulder_estimation1, name='elbow_estimation'),
    path('leftankle1/', views.left_ankle_dorsiflexion, name='left_ankle_dorsiflexion'),
    path('rightankle1/', views.right_ankle_dorsiflexion, name='right_ankle_dorsiflexion'),
    path('leftankle2/', views.left_ankle_plantar_flexion, name='left_ankle_plantar_flexion'),
    path('rightankle2/', views.right_ankle_plantar_flexion, name='right_ankle_plantar_flexion')
]
