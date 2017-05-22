<<<<<<< HEAD
pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
=======
node('node') {


    currentBuild.result = "SUCCESS"

 

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'node -v'
         sh 'npm prune'
         sh 'npm install'
         sh 'npm test'

       }


       stage('Deploy'){

         echo 'Push to Repo'
         
       }
       }
      
>>>>>>> fa9e99c8b014323d346369e7cfbafc202562af59
