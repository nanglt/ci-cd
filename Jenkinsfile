pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    tools{
        maven '3.9.6'
    }
    stages {

        stage('Test'){
            steps {
                echo 'Testing...'
            }
        }
        stage ('Sonarqube'){
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            agent {
                docker {
                    image 'node:lts-buster-slim'
                    reuseNode true
                }
            }
            steps{
                withSonarQubeEnv(credentialsId: 'sonar_test2', installationName: 'Sonarqube Server Connection') {
                     sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Deploying...'
                withDockerRegistry(credentialsId: 'Dockerhub-nanglt', url: 'https://index.docker.io/v1/') {
                    echo 'Login in docker'
                    sh 'docker build -t nanglt/cicd-nest:v1 .'
                    sh 'docker push nanglt/cicd-nest:v1'
                }
            }
        }
        stage('Deploy'){
            steps {
                echo 'Deploy...'
                sshagent(['cid']) {
                    sh 'ssh ubuntu@cid.sonatgame.com touch test.txt'
                }
            }
        }

    }
}