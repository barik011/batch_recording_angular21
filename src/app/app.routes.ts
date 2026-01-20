import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { BatchMaster } from './pages/batch-master/batch-master';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Candidates } from './pages/candidates/candidates';
import { BatchEnrollments } from './pages/batch-enrollments/batch-enrollments';
import { SessionRecording } from './pages/session-recording/session-recording';
import { CandidateDashboard } from './pages/candidate-dashboard/candidate-dashboard';
import { CandidateSessionRecording } from './pages/candidate-session-recording/candidate-session-recording';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'batch',
                component:BatchMaster,
                canActivate:[authGuard]
            },
            {
                path:'dashboard',
                component:Dashboard,
                canActivate:[authGuard]
            },
            {
                path:'candidate-dashboard',
                component:CandidateDashboard,
                canActivate:[authGuard]
            },
            {
                path:'candidate',
                component:Candidates,
                canActivate:[authGuard]
            },
            {
                path:'enrollment',
                component:BatchEnrollments,
                canActivate:[authGuard]
            },
            {
                path:'session-recording',
                component:SessionRecording,
                canActivate:[authGuard]
            }
            ,
            {
                path:'candidate-recording',
                component:CandidateSessionRecording,
                canActivate:[authGuard]
            }
        ]
    }

];
