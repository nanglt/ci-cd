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
            }
        }
    }
    post{
        always{
            echo "This will always run"
        }
        success{
            echo "This will run if the build success"
        }
        failure{
            echo "This will run if the job failed"
        }
        unstable{
            echo "This will run if the completion status"
        }
        changed{
            echo "This will run if the state of the pipeline has changed"
        }
        fixed {
            echo "This will run if the previous run failed"
        }
    }
}