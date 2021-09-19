function main(){
    
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // AMPUN BANG JAGO
        // AMPUN
        // A
        -0.8, 0.4, -0.7, 0.75, -0.7, 0.75, -0.6, 0.4, -0.77, 0.5, -0.63, 0.5,
        // M
        -0.5, 0.4, -0.5, 0.75, -0.5, 0.75, -0.35, 0.4, -0.35, 0.4, -0.2, 0.75, -0.2, 0.75, -0.2, 0.4,
        // P
        -0.05, 0.4, -0.05, 0.75, -0.05, 0.75, 0.13, 0.75, 0.13, 0.75, 0.13, 0.57, 0.13, 0.57, -0.05, 0.57, 
        // U
        0.25, 0.75, 0.25, 0.4, 0.25, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.75, 
        // N
        0.5, 0.4, 0.5, 0.75, 0.5, 0.75, 0.7, 0.4, 0.7, 0.4, 0.7, 0.75,
        // BANG
        // B
        -0.5, 0.15, -0.5, -0.15, -0.5, -0.15, -0.35, -0.15, -0.35, -0.15, -0.35, 0.02, -0.35, 0.02, -0.5, 0.02, -0.5, 0.15, -0.37, 0.15, -0.37, 0.15, -0.37, 0.02, 
        // A
        -0.3, -0.15, -0.2, 0.15, -0.2, 0.15, -0.1, -0.15, -0.27, -0.05, -0.13, -0.05,
        // N
        0.0, -0.15, 0.0, 0.15, 0.0, 0.15, 0.2, -0.15, 0.2, -0.15, 0.2, 0.15,
        // G
        0.48, 0.15, 0.3, 0.15, 0.3, 0.15, 0.3, -0.15, 0.3, -0.15, 0.48, -0.15, 0.48, -0.15, 0.48, 0.0, 0.48, 0.0, 0.4, 0.0,
        // JAGO
        // J
        -0.75, -0.3, -0.75, -0.9, -0.75, -0.9, -0.9, -0.9,  -0.9, -0.9, -0.9, -0.8,
        // A
        -0.65, -0.9, -0.45, -0.3, -0.45, -0.3, -0.25, -0.9, -0.57, -0.67, -0.33, -0.67,
        // G
        0.3, -0.3, -0.15, -0.3, -0.15, -0.3, -0.15, -0.9, -0.15, -0.9, 0.3, -0.9, 0.3, -0.9, 0.3, -0.65, 0.3, -0.65, 0.1, -0.65,
        // O
        0.4, -0.3, 0.4, -0.9, 0.4, -0.9, 0.85, -0.9, 0.85, -0.9, 0.85, -0.3, 0.85, -0.3, 0.4, -0.3
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertextShaderCode =`
    attribute vec2 a_Position;
    void main(){
        gl_Position = vec4(a_Position, 0.0, 1.0);
        gl_PointSize = 20.0;
    }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertextShaderCode);
    gl.compileShader(vertexShader);

    //definisi fragment
    var fragmentShaderCode = `
    void main(){
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINES, 0, 100);

}

// function main() {
//     var canvas = document.getElementById("myCanvas");
//     var gl = canvas.getContext("webgl");

//     // Menggambar 2 titik
//     // Mendifinisikan vertex-vertex
//     // A (0.0, 0.5), B(0.5, -0.5), C(-0.5, -0.5) 
    
//     var vertices = [
//         0.0, 0.5,
//         0.5, -0.5,
//         -0.5, -0.5
//     ];

//     // Shader cuma bisa gambar titik satu-satu
//     // Buffer sebagai tempat penyimpanan sementara untuk menggambar di canvas
//     // Setelah digambar, lalu di-null-kan
//     var positionBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
//     gl.bindBuffer(gl.ARRAY_BUFFER, null);

//     var vertexShaderCode = `
//     attribute vec2 a_Position;
//     void main() {
//         gl_Position = vec4(a_Position, 0.0, 1.0);
//         gl_PointSize = 20.0 ;
//     }
//     `;

//     var vertexShader = gl.createShader(gl.VERTEX_SHADER);
//     gl.shaderSource(vertexShader, vertexShaderCode);
//     gl.compileShader(vertexShader);

//     // Mendefinisi fragment
//     var fragmentShaderCode = `
//     void main() {
//         gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
//     }
//     `;
    
//     // warna dari titik-titik
//     var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//     gl.shaderSource(fragmentShader, fragmentShaderCode);
//     gl.compileShader(fragmentShader);

//     var shaderProgram = gl.createProgram();
//     gl.attachShader(shaderProgram, vertexShader);
//     gl.attachShader(shaderProgram, fragmentShader);
//     gl.linkProgram(shaderProgram);
//     gl.useProgram(shaderProgram);

//     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//     var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
//     gl.vertexAttribPointer(aPosition, 2, gl.Float, false, 0, 0);
//     gl.enableVertexAttribArray(aPosition);

//     // Menentkan warna background
//     gl.clearColor(1.0, 1.0, 1.0, 1);
//     // Untuk menggambar, kertasnya harus bersih, ga mungkin gambarnya ditumpuk
//     // Maka dilakukan clear
//     gl.clear(gl.COLOR_BUFFER_BIT);
//     // Lalu menggambar
//     // 0 = nilai OffscreenCanvasRenderingContext2D, 1 = count (yang digambar)
//     gl.drawArrays(gl.POINTS, 0, 2);

// }