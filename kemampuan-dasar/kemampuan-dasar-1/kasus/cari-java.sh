EXISTNYA=$(mdfind -count -onlyin $1 *.java)

if [ $EXISTNYA -gt 0 ]; then
	echo "ada file Java pada directori $(mdfind -onlyin $1 *.sh)"
else
	echo "tidak ada"
fi




