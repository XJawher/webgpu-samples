(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1:function(e,t,n){"use strict";var o=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((o=o.apply(e,t||[])).next())}))};let r=void 0;t.a=function(){return o(this,void 0,void 0,(function*(){if(void 0!==r)return r;const e=yield import("https://unpkg.com/@webgpu/glslang@0.0.15/dist/web-devel/glslang.js");return r=yield e.default(),r}))}},25:function(e,t,n){"use strict";n.r(t),n.d(t,"title",(function(){return i})),n.d(t,"description",(function(){return a})),n.d(t,"init",(function(){return u})),n.d(t,"glslShaders",(function(){return c})),n.d(t,"wgslShaders",(function(){return s}));var o=n(1),r=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((o=o.apply(e,t||[])).next())}))};const i="Video Texture",a="This example shows how to upload video frame to WebGPU.";function u(e){return r(this,void 0,void 0,(function*(){const t=document.createElement("video");t.loop=!0,t.autoplay=!0,t.muted=!0,t.src="assets/video/pano.webm",yield t.play();const n=yield navigator.gpu.requestAdapter(),r=yield n.requestDevice(),i=yield Object(o.a)(),a=e.getContext("gpupresent"),u=new Float32Array([1,1,0,1,0,1,-1,0,1,1,-1,-1,0,0,1,1,1,0,1,0,-1,-1,0,0,1,-1,1,0,0,0]),s=r.createBuffer({size:u.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(s.getMappedRange()).set(u),s.unmap();const l=a.configureSwapChain({device:r,format:"bgra8unorm"}),d=r.createRenderPipeline({vertexStage:{module:r.createShaderModule({code:c.vertex,transform:e=>i.compileGLSL(e,"vertex")}),entryPoint:"main"},fragmentStage:{module:r.createShaderModule({code:c.fragment,transform:e=>i.compileGLSL(e,"fragment")}),entryPoint:"main"},primitiveTopology:"triangle-list",vertexState:{vertexBuffers:[{arrayStride:20,attributes:[{shaderLocation:0,offset:0,format:"float3"},{shaderLocation:1,offset:12,format:"float2"}]}]},colorStates:[{format:"bgra8unorm"}]}),f=r.createSampler({magFilter:"linear",minFilter:"linear"}),m=r.createTexture({size:{width:t.videoWidth,height:t.videoHeight,depth:1},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.SAMPLED}),v=r.createBindGroup({layout:d.getBindGroupLayout(0),entries:[{binding:0,resource:f},{binding:1,resource:m.createView()}]});return function(){createImageBitmap(t).then(e=>{r.defaultQueue.copyImageBitmapToTexture({imageBitmap:e,origin:{x:0,y:0}},{texture:m},{width:t.videoWidth,height:t.videoHeight,depth:1});const n=r.createCommandEncoder(),o={colorAttachments:[{attachment:l.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]},i=n.beginRenderPass(o);i.setPipeline(d),i.setVertexBuffer(0,s),i.setBindGroup(0,v),i.draw(6,1,0,0),i.endPass(),r.defaultQueue.submit([n.finish()])})}}))}const c={vertex:"#version 450\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 0) uniform sampler mySampler;\nlayout(set = 0, binding = 1) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(myTexture, mySampler), fragUV);\n}\n"},s={vertex:"#version 450\n[[location(0)]] var<in> position : vec3<f32>;\n[[location(1)]] var<in> uv : vec2<f32>;\n\n[[location(0)]] var<out> fragUV : vec2<f32>;\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\nvoid main() {\n  Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n",fragment:"\n[[binding(0), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(1), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragUV : vec2<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor =  textureSample(myTexture, mySampler, fragUV);\n  return;\n}\n"}}}]);
//# sourceMappingURL=videoUploading-c6cfbc.js.map