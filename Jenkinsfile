pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
        SONAR_SCANNER = tool 'SonarScanner';
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
        stage('Deploy'){
            steps {
                echo 'Deploy...'
                sshagent(['cid']) {
                    sh 'ssh ubuntu@cid.sonatgame.com touch test.txt'
                }
            }
        }
        stage ('Sonarqube'){
            steps{
                withSonarQubeEnv(credentialsId: 'sonar') {
                    withSonarQubeEnv() {
                      sh "${SONAR_SCANNER}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}