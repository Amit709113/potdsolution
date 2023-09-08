import React from 'react'
import sep8 from "./sep8.png"

const answer=
`
    if(root==null) return null;
    ArrayList<Integer>list=new ArrayList<>();
    inorder(root,list);
    Collections.sort(list);
    int[] idx={0};
    inorderChange(root,list,idx);
    return root;
    }
    public void inorder(Node root,ArrayList<Integer>list){
    if(root==null) return;
    inorder(root.left,list);
    list.add(root.data);
    inorder(root.right,list);
    }
    public void inorderChange(Node root,ArrayList<Integer>list,int[] idx){
    if(root==null) return;
    inorderChange(root.left,list,idx);
    root.data = list.get(idx[0]);
    idx[0]++;
    inorderChange(root.right,list,idx);
    
`
const stepp=`

STEP 1: change language to java 🚩  
STEP 2: paste at marked position
class Solution
{
    // The given root is the root of the Binary Tree
    // Return the root of the generated BST
    Node binaryTreeToBST(Node root)
    {
       // Your code here
       //paste here
    }
}
 


`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("(-> JAVA The code has been copied successfully 👍🏽");
      })
      .catch(() => {
        alert("something went wrong please copy manually😔");
      });
    
}
const btnStyle={
    background:"#9b59b6",
    color:"#fff",
    border:"2px solid #ecf0f1",
    outline:"none",
    borderRadius:"5px",
    textTransform:"uppercase",
    cursor:"pointer",
    padding:"15px 20px"
}
const App = () => {
 return (
    <>
        <h1>Solution of POTD  </h1>
        <h3><img src={sep8} alt="sep 8,2023" width="100px" height="50px" /></h3>
        <p>at 09:10 am</p>
        
        <div>
            <pre>
                {stepp}
            </pre> 
        </div>
        <br />
        <p>{`ans ->`}</p>
        <br />
        <div style={{display:"flex",justifyContent:"center",gap:50}}>
            <button style={btnStyle} onClick={copyHandler}> click to copy </button>
            <a href="https://practice.geeksforgeeks.org/problem-of-the-day"><button style={btnStyle} marginRight="50px" >POTD direct Link</button></a>
        </div>
        <br />
        <div style={{display:'flex',justifyContent:"center"}}>
        <textarea className='textareaStyle' type="textarea" style={{fontSize: "12pt",width:"90%",height:"60vh",background:"#d3d3d3"}} defaultValue={answer} readOnly>
        </textarea>
        </div>    
    </>
  )
}
export default App