function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    //definisikan vertex-vertex
    /**
     * A (0.0, 0.5), B (0.5, -0.5), C (-0.5, -0.5)
     */
    var vertices = [
        // 0.0, 0.5,    //titik A
        // 0.5, -0.5,   //titik B
        // 0.5, -0.5,   //titik B
        // -0.5, -0.5,   //titik C
        // -0.5, -0.5,   //titik C
        // 0.5, 0.5,   //titik D
        // 0.0, 0.0, //titik E
        // 0.0, 0.5,    //titik A
        // -0.5, 0.0

        0.5, 0.5,    //titik A
        0.5, -0.5,   //titik B
        -0.5, -0.5,  //titik C
        // -0.5, -0.5,  //titik C
        -0.5, 0.5,  //titik D
        0.5, 0.5,    //titik A
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

    // gl.drawArrays(gl.POINTS, 0, 7);
    // gl.drawArrays(gl.LINES, 0, 6);
    gl.drawArrays(gl.LINE_LOOP, 0, 4);
    // gl.drawArrays(gl.LINE_STRIP, 0, 4);
    // gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    // gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);

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