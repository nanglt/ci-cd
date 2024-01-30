pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    stages {
        stage('Build') {
            steps{
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
            steps{
                sshagent (credentials: ['deploy-dev']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 192.168.10.159 uname -a touch text.txt'
                }
            }
        }
    }

}