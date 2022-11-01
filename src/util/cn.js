export default function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}
