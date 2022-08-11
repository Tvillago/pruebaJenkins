node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/Tvillago/pruebaJenkins.git'
    }
    
    stage('install node modules'){
        sh 'npm install'
    }

    stage('Build'){
        sh 'npm run build'
    } 


}