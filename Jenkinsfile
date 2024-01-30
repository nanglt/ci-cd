pipeline{
    agent any
    environment{
        DB_URL = 'mysql+pymysql://usr:pwd@host:/db'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the app....'
                sh '''
                    echo "This block contains multi-line steps"
                '''
                sh '''
                    echo "Database url is: ${DB_URL}"
                    env
                '''
            }
        }
        stage('Test'){
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy'){
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
    }

}