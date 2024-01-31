pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Deploying...'
                withDockerRegistry(credentialsId: 'nanglt', url: 'https://index.docker.io/v1/') {
                    script{
                        app = docker.build("nanglt/cicd-nest")
                        app.push()
                        app.push('latest')
                    }
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
                sshagent (credentials: ['deploy-dev']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 192.168.10.159 uname -a touch text.txt'
                    sh 'docker tag scretagent:v1 localhost:5000/secretagent:v1'
                    sh 'docker run -d --network='host' -p 3050:3050 --name secret_agent localhost:5000/secretagent:v1'
                    sh 'echo 'Secret Agent up and running on port 3050''
                }
            }
        }
    }
}