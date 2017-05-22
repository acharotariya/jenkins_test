
pipeline {
    agent {
        docker { image 'node:boron' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
