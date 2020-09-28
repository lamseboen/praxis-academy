echo "halo, nama program yang mau di-kill apa?"
read programnya

PIDNYA=$(pgrep $programnya)

if [ $PIDNYA ]; then
	kill -9 $PIDNYA
fi