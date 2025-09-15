pipeline {
    agent {
        docker {
            image 'cypress/base:22.19.0'
            args '-- network qatw-primeira-edicao_skynet'
        }
    }

    stages {
        stage('Node.js Deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        }
    }