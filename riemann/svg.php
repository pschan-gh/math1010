<?php

   
for ($n = 2; $n < 21; $n++) {
  $svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 650 400\">";
  $file = fopen("rects$n.svg", "w");
  
  $x1 = 0.5*(650/3);
  $dx = round((2/$n)*650/3, 2);
 
  for($i = 0; $i < $n; $i++) {
    $x = $x1;
    $x1 = $x + $dx;
    $var = (2/$n)*$i;
    $dy = (pow($var, 2) - $var + 1)*(400/5);
    $y = (397 - (400/5)) - $dy;
//    $svg .= "<rect x=\"".round($x)."\" y=\"".round($y)."\" width=\"".round($dx)."\" height=\"".round($dy)."\" style=\"stroke: #000000;fill:#58ad8f;opacity:0.5\"/>";
// #77bb77
        $svg .= "<rect x=\"".round($x, 2)."\" y=\"".round($y)."\" width=\"".$dx."\" height=\"".round($dy)."\" style=\"stroke:hsl(160,35%,45%);fill:hsl(160,35%,50%);opacity:0.4\"/>";
// #77bb77
  }
  $svg .= "</svg>";
  fwrite($file, $svg);
  fclose($file);
}

?>