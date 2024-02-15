pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    tools{
        maven '3.9.6'
        nodejs '21.6.2'
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
            steps{
                nodejs()
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