      
            function swap(arg)
            {
                var img1, img2, displayedText, displayName, txt1, txt2, name1, name2;
                
                img1 = document.getElementById('testimony_img1').src;
                img2 = document.getElementById('testimony_img2').src;
                displayedText = document.getElementById('testimony_text');
                displayName = document.getElementById('testimony_name');
                
                document.getElementById('testimony_img1').src = img2;
                document.getElementById('testimony_img2').src = img1;
                
                txt1 = "Lorem ipsum lorem ipsum dolar ilorem ipsum ane eye wanaki niseb hiboma<br>kabay netsilom ajoki seey hasabu sebey tsimem nbel gdabaeley yitokatko<br>ewuy zwuney ewuy zkelbey, fetatinkyo afkire endiye hansab hizi demo tselieki fotye endye hansa hizi demo tselieki gin knafikoye hiluf hiwetna bewnet";
                txt2 = "Hello";
                
                name1 = "Kasabela DJ, Boston 2019";
                name2 = "Noor's girlfriend, Kenya 2019";
                
                if(displayedText.innerHTML !== "Hello")
                    {
                        displayedText.innerHTML = txt2;
                        displayName.innerHTML = name2;
                    }
                else if(displayedText.innerHTML === "Hello")
                    {
                        displayedText.innerHTML = txt1;
                        displayName.innerHTML = name1;
                    }
            }