node('testing') {
    stage('Initialize') {
        echo 'Initializing...'
    }

    stage('Checkout') {
        echo 'Getting source code...'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i'
    }

    stage('Test') {
        echo 'Testing...'
        sh 'npm test'
    }

    stage('Publish') {
        echo 'Publishing Test Coverage...'
    }
}
