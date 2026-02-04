export const GlobalConstant = {
        LOCAL_KEY_LOGIN:"batch32"    
}

export const Controllers ={
    
        BATCHES:'Batches',
        BATCH_USER_LOGIN:'BatchUser/login',

        CANDIDATES:'Candidates',
        BATCH_ENROLLMENT:'BatchEnrollments',
        
        // GET_ALL_ENROLLMENT:'GetAllEnrollment',
        // GET_ENROLLMENT_BY_ID:'getEnrollentById',
        BATCH_SESSIONS:'BatchSessions',
        //GET_ALL_SESSIONS_RECORDINGS:'GetAllSessionsRecordings',
        GET_SESSIONS_RECORD_BY_ID:'getSesssionById?sessionId='
}

export const METHOD_NAME = {
        ENROLMENT:{
                GET_ALL_ENROLLMENT:'GetAllEnrollment',
                GET_BY_BATCH_ID:'getEnrollentById',
                GET_ENROLLMENT_BY_CANDIDATE:'by-candidate'
        },
        DASHBOARD:{
                
        },
        SESSION:{
                GET_SESSION_BY_BATCH:'by-batch',
                GET_ALL_RECORDING: 'GetAllSessionsRecordings',
                GET_RECORD_BY_ID:'getSesssionById?sessionId='

        }
}