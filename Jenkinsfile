pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    tools{
        maven '3.9.6'
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
                withSonarQubeEnv('Sonarqube Server Connection') {
                     sh 'mvn sonar:sonar -Dsonar.projectKey=jenkins-example -Dsonar.host.url=http://cid.sonatgame.com:9000 -Dsonar.login=34b4bec0425e8d5ee27cce937d037b1211b2a6cc'
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