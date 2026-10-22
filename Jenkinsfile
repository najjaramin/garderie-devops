pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        DOCKERHUB_USERNAME = 'najjaramin'
        FRONTEND_IMAGE = 'najjaramin/garderie-frontend'
        BACKEND_IMAGE = 'najjaramin/garderie-backend'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE:$BUILD_NUMBER -t $FRONTEND_IMAGE:latest -f frontend/Dockerfile frontend'
                sh 'docker build -t $BACKEND_IMAGE:$BUILD_NUMBER -t $BACKEND_IMAGE:latest -f backend/Dockerfile backend'
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_TOKEN'
                    )
                ]) {
                    sh 'echo "$DOCKER_TOKEN" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh 'docker push $FRONTEND_IMAGE:$BUILD_NUMBER'
                    sh 'docker push $FRONTEND_IMAGE:latest'
                    sh 'docker push $BACKEND_IMAGE:$BUILD_NUMBER'
                    sh 'docker push $BACKEND_IMAGE:latest'
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline terminé avec succès.'
        }
        failure {
            echo 'Pipeline échoué. Consulter les logs Jenkins.'
        }
        always {
            sh 'docker logout || true'
        }
    }
}
