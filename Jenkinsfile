pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    tools{
        maven 'Maven 3.3.9'
        jdk 'jdk8'
    }
    stages {
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
        stage('Test'){
            steps {
                echo 'Testing...'
            }
        }
        stage ('Sonarqube'){
            steps{
                withSonarQubeEnv(credentialsId: 'sonarqube-server-admin-token', installationName: 'Sonarqube Server Connection') {
                     sh 'mvn clean package sonar:sonar'
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