function mcPicker_java() {
    document.getElementById('java').style.display = 'inherit';
    document.getElementById('bedrock').style.display = 'none';
    document.getElementById('java_btn').style.backgroundColor = 'var(--accent)';
    document.getElementById('bedrock_btn').style.backgroundColor = 'transparent';
}
function mcPicker_bedrock() {
    document.getElementById('bedrock').style.display = 'inherit';
    document.getElementById('java').style.display = 'none';
    document.getElementById('bedrock_btn').style.backgroundColor = 'var(--accent)';
    document.getElementById('java_btn').style.backgroundColor = 'transparent';
}